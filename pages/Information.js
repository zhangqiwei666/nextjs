import Link from 'next/link'
export default function Information(){
    return (
        <>
            我是Information页面
            <Link href="/"><a>
                <span>返回首页</span>
                <span>Icon</span>
                </a></Link>
        </>
    )
}