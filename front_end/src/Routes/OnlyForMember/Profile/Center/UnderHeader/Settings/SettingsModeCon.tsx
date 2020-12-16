import React, { useState } from "react";
import SettingsModePre from "./SettingsModePre";

const SettingsModeCon = () => {
  const [ProfileEditOpen, setProfileEditOpen] = useState(false);
  const [AccountEditOpen, setAccountEditOpen] = useState(false);
  return (
    <SettingsModePre
      ProfileEditOpen={ProfileEditOpen}
      setProfileEditOpen={setProfileEditOpen}
      AccountEditOpen={AccountEditOpen}
      setAccountEditOpen={setAccountEditOpen}
    />
  );
};

export default React.memo(SettingsModeCon);
