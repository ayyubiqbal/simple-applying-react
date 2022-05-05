import classes from "./Button.module.css"
const variants = {
    primary: {
        backgroundColor: "#2196f3",
        color: "#fff",
    },
    warning: {
        backgroundColor: "#fdd835",
        color: "#000",
    },
    success: {
        backgroundColor: "#2e7d32",
        color: "#fff"
    }
}

const Button = (props) => {
    const { variant, name, type } = props;
    const userVariant = variants[variant]
    return (
        <button className={classes.btn} type={type} style={{
            ...userVariant
        }}>{name}</button>
    )
}

export default Button