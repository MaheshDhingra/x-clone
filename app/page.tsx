import Image from "next/image";
import { checkUser } from '@/lib/checkUser';

export default async function Home() {
  const user = await checkUser();

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h2>Hello world!</h2>
        </div>
      </nav>

    </div>
  );
}
