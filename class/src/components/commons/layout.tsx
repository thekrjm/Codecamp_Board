import { useRouter } from "next/router";
import LayoutBanner from "./layout/banner";
import LayoutFooter from "./layout/footer";
import LayoutHeader from "./layout/header";
import LayoutNavigation from "./layout/navigation";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADERS = [
  "/section13/13-02-library-star",
  "/section13/13-01-library-icon",
];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  console.log("=================");
  console.log(router.asPath);
  console.log("=================");

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <div style={{ display: "flex" }}>
        <LayoutNavigation />
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
