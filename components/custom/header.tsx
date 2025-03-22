interface headerProps {
  label: string;
  title: string;
}

export const Header = ({ label, title }: headerProps) => {
  return (
    <div className="boxMar">
      <div className="flex items-center justify-center space-x-3 ">
        <h2 className="text-xl sm:text-2xl font-bold text-center">{title}</h2>
      </div>
      <p className="text-lg sm:text-xl text-center opacity-90">{label}</p>
    </div>
  );
};
