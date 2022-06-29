export function FormControl({
    id,
    label,
    type = "text",
    className,
    children,
    ...props
}) {
    return (
        <div className="mb-3">
            
            <label htmlFor={id} className="form-label">
                {label}
            </label>

            <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                {...props}
            />
            {children}
        </div>
    );
};
