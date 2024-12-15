import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfo, getUserInfo } from "api/users";
import initialValues from "./initialValues";
import ProfileFields from "./ProfileFields";
import FormStyleWrapper from "components/layouts/FormStyleWrapper";

function UpdateProfile() {
  const [serverValues, setServerValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    setLoading(true);
    updateUserInfo(values).then(() => {
      setLoading(false);
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    getUserInfo().then((data) => setServerValues(data));
  }, []);

  return (
    <FormStyleWrapper>
      <ProfileFields
        loading={loading}
        initialValues={serverValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
      />
    </FormStyleWrapper>
  );
}

export default UpdateProfile;
