import Image from "next/image";
import { baskerville } from "./fonts";

export default function Home() {




  return (
    <div>
      <h1 className={baskerville.className}>Welcome to our Accessibility Report Tool</h1>
      <form action="/report">
        <input type="text" id="url" name="url" placeholder="Enter a URL" required />
        <button type="submit">Get Report</button>
      </form>
    </div>
  );
}
