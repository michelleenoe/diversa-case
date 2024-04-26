import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
    return (
        <>
            <Skeleton />
            <Skeleton count={5} />
        </>
    );
}

export default App;
