import Sidebar from "../Sidebar/Sidebar";

export function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="w-full">{children}</div>
    </>
  );
}
export const getDashboardLayout = function (page, pageProps) {
  return <Admin {...pageProps}>{page}</Admin>;
};

export default Admin;
