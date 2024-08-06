import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return <h1>DCT : {t("title")}</h1>;
}
