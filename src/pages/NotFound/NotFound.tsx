import React from "react";
import { Container, ReturnButton } from "../../components";
import s from "./NotFound.module.css";

const NotFound: React.FunctionComponent = () => {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>404 Page Not Found</h2>
        <p className={s.text}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <ReturnButton />
      </div>
    </Container>
  );
};

export default NotFound;
