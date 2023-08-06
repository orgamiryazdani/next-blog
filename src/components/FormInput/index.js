const InputComponent = ({ label, formik, name, type, className, placeholder = "" }) => {
    return (
        <div>
            <label className="flex flex-row mb-2 text-sm text-gray-500" htmlFor={name}>
                {label}
                {formik.touched[name] && formik.errors[name] ? (
                    <div className="flex-1 ml-2 text-rose-500 text-left text-xs">{formik.errors[name]}</div>
                ) : null}
            </label>
            <input dir="ltr"
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                placeholder={placeholder}
                className="text-left border p-2 text-sm rounded border-gray-200 outline-none w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type={type || "text"} />
        </div>
    );
}

export default InputComponent;