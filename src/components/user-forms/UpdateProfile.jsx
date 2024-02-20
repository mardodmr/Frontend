import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfo, getUserInfo } from "api/users";
import { initialValues } from "./initialValues";
import ProfileFields from "./ProfileFields";

function CompleteProfile() {
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
    <ProfileFields
      loading={loading}
      initialValues={serverValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
    />
  );
}

export default CompleteProfile;
