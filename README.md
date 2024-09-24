## 開発用サンプル
- 開発初期段階のサンプル

## 開発環境
```
npx create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … nextjs14-intro03
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use Tailwind CSS? …  / Yes
✔ Would you like to use `src/` directory? … No / 
✔ Would you like to use App Router? (recommended) …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

## 追加ライブラリ
```sh
npm install classnames
npm install dayjs@1.11.10
npm install nextjs-basic-auth-middleware@3.1.0
## Headless UI
npm install @headlessui/react
## Heroicons
npm install @heroicons/react
## Tailwind Variants
npm install tailwind-variants
```

## page開発テンプレート
```js
import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const twStayles = tv({
	variants: {
		style:{
			contain01:'',
		},
	},
});

export default function Sqmple01(){
	return(
	<>
		<p>sample01</p>
	</>
	);
}
```

## 動かし方
```
cd [/sampleOS/app] *アプリまで移動
pwd
npm run dev
```
