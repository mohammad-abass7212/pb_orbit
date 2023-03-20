import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="mh-100">
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
