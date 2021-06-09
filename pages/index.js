import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'
//next 框架只能用query 传递参数
export default function Home() {
  Router.events.on('routerChangeStart',(...arg) =>{
    console.log('路由变化开始', arg)
  })
  Router.events.on('routerChangeComplete',(...arg) =>{
    console.log('路由变化结束',arg)
  })
  function goXiaojiejie(path, name){
    // Router.push({
    //   pathname:'/Xiaojiejie',
    //   query:{
    //     name:'结衣'
    //   }
    // })
  };
  return (
    <div className={styles.container}>
      home页面
     <Link href="/App"><a>去APP页面</a></Link>
     <Link href="/Information"><a>去information页面</a></Link>'
     <div>
       <Link href={{pathname:'/Xiaojiejie',query:{name:'结衣'}}}><a>新恒结衣</a></Link>
       <button onClick={goXiaojiejie('/Xiaojiejie', '结衣')}>Information</button>
       <button onClick={goXiaojiejie('/Xiaojiejie', '井空')}>Information</button>
     </div>
    </div>
  )
}
