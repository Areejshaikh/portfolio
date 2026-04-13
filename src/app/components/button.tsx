interface ButtonProps {
    name: string;
    icon?: React.ReactNode;
}

const Button = ({ name, icon }: ButtonProps) => {
    return (
        <button
            className="group cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3 
                       border-2 border-base-text text-base-text font-medium
                       hover:bg-base-text hover:text-base-color 
                       transition-all duration-300 ease-in-out
                       rounded-full text-base md:text-lg
                       focus:outline-none focus:ring-2 focus:ring-base-text focus:ring-offset-2"
        >
            {name}
            {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
        </button>
    )
}

export default Button
