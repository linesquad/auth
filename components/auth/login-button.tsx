"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild = false,
}) => {
  const onClick = () => {
    console.log("clicked");
  };
  if (mode == "modal") {
    return (
      <span onClick={onClick} className="cursor-pointer">
        TODO: Implement modal
      </span>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
