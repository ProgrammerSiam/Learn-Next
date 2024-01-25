import { signInwithOAuth } from "@/actions/auth-action";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

const OAuthButton = async ({ provider }) => {
  return (
    <form
      action={async () => {
        "use server";
         await signInwithOAuth(provider);
      }}
      className="w-full"
    >
      <Button
        type="submit"
        className={cn(
          "mt-2 flex w-full items-center justify-center gap-2 bg-foreground text-background  "
        )}
      >
        <p>Log in with {provider}</p>
      </Button>
    </form>
  );
};

export default OAuthButton;
