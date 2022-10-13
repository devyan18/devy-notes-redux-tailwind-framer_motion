import { Layout } from "@components";

export interface NotesPageInterface {}

const NotesPage : React.FC<NotesPageInterface> = () => {
  return (
    <Layout>
      <h1>Notes</h1>
    </Layout>
  );
};

export default NotesPage;
