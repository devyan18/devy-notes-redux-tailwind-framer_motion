import { Layout } from "@components";

export interface SettingsPageInterface {}

const SettingsPage : React.FC<SettingsPageInterface> = () => {
  return (
    <Layout>
      <h1>Settings</h1>
    </Layout>
  );
};

export default SettingsPage;
