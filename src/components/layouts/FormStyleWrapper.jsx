import css from "style-sheets/forms.module.css";

function FormStyleWrapper({ children }) {
  return <div className={css.forms}>{children}</div>;
}

export default FormStyleWrapper;
