import React from "react";
import Message from "./Message";
import { useState } from "react";

function Loading(props) {
  const [isHidden, setHidden] = useState(!props.hidden);

  if (isHidden) {
    setHidden(false);
  }

  return (
    <>
      {props.hidden ? (
        <>
          <Message text={"Chào mừng bạn quay trở lại"} color={"green"} />
        </>
      ) : (
        <>
          <div className="overlay" hidden={props.hidden}>
            <div className="loadingio-spinner-eclipse-tdxmhh22p8">
              <div className="ldio-0skrctsnq2lg">
                <div />
              </div>
            </div>
          </div>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "@keyframes ldio-0skrctsnq2lg {0% {  transform: rotate(0deg);}50% {  transform: rotate(180deg);}100% {  transform: rotate(360deg);}}@keyframes overlay {0% {  opacity: 0.5;}100% {  opacity: 1;}}.ldio-0skrctsnq2lg div {position: absolute;animation: ldio-0skrctsnq2lg 1s linear infinite;width: 120px;height: 120px;top: 20px;left: 20px;border-radius: 50%;box-shadow: 0 4px 0 0 #0f766e;transform-origin: 80px 82px;}.loadingio-spinner-eclipse-tdxmhh22p8 {position: absolute;left: 50%;top: 50%;translate: -50% -50%;width: 180px;height: 180px;display: inline-block;overflow: hidden;}.ldio-0skrctsnq2lg {width: 100%;height: 100%;position: relative;transform: translateZ(0) scale(1);backface-visibility: hidden;transform-origin: 0 0; /* see note above */}.overlay {position: fixed;inset: 0;background-color: rgba(206, 202, 202, 0.354);opacity: 1;animation: overlay;animation-duration: 0.5s;}.ldio-0skrctsnq2lg div {box-sizing: content-box;}/* generated by https://loading.io/ */",
            }}
          />
        </>
      )}
    </>
  );
}

export default Loading;