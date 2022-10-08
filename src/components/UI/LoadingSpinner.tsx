import style from "./LoadingSpinner.module.scss";

const LoadingSpinner: React.FC<{className:string}> = (props) => {
  return (
    <div className={props.className}>
      <div className={style.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
