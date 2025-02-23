
import { Button } from "@/components/ui/button";
import { UserButton} from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h2>I am Page</h2>
      <Button>Click Me</Button>
      <UserButton/>
    </div>
  );
}
