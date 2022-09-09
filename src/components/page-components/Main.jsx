import classes from './Main.module.scss'

export default function Main({children}){
    return <main className={classes['main-body']}>
        {children}
    </main>
}