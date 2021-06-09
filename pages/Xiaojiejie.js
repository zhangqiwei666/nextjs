import {withRouter} from 'next/router'
import Link from 'next/router'
//list 为initialProps初始化传过来的值
const Xiaojiejie =({router, list})=>{
    return(
        <>
        <div>{router.query.name}我来看你了</div>
        <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

Xiaojiejie.getInitialProps =async()=>{
    const promise = new Promise((resolve, reject) =>{
        resolve()
    })

    return await promise
}

export default withRouter(Xiaojiejie)