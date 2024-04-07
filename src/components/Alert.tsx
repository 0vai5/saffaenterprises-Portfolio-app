interface AlertProps {
    type: 'success' | 'error';
    emoji: string;
    message: string;
  }
  
  const Alert: React.FC<AlertProps> = ({ type, emoji, message }) => {
    return (
      <div
        role="alert"
        className={`flex max-w-[300px] p-2 rounded-full items-center justify-center leading-none lg:rounded-full  lg:inline-flex ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        <span className="font-semibold mr-2 text-left flex-auto">
          {emoji} {message}
        </span>
      </div>
    );
  };
  
  export default Alert;