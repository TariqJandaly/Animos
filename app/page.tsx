import { Search, MainPage } from "@/components"
import PageControlls from "@/components/PageControlls"

export default async function Home() {
    return (
        <>
            <Search />
            <PageControlls />
            <MainPage />
            <PageControlls />
        </>
    )
}
