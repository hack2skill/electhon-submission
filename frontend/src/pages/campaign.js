import React, { useEffect, useState } from "react";
import DetailForm from "../components/campaign/detailform";
import requireAuth from "../utils/requireAuth";

export default function Campaign() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requireAuth("/login", "/campaign").then((data) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <DetailForm />
    </>
  );
}
