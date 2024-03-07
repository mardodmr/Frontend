import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserInfo } from "api/users";
import ProfileFields from "./ProfileFields";
import initialValues from "./initialValues";
import FormStyleWrapper from "components/layouts/FormStyleWrapper";

function CompleteProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    setLoading(true);
    createUserInfo(values).then(() => {
      setLoading(false);
      navigate("/", { replace: true });
    });
  };

  return (
    <FormStyleWrapper>
      <ProfileFields
        loading={loading}
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    </FormStyleWrapper>
  );
}

export default CompleteProfile;
