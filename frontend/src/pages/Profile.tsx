import { useBlogsOfUser } from '../hooks/useBlog'
import { useParams } from 'react-router-dom'
import BlogsOnProfile from '../components/BlogsOnProfile'
import AppBar from '../components/AppBar'

const Profile = () => {
    const { userId } = useParams()
    const {loading, error, blogs } = useBlogsOfUser(userId!!)
    return (
        <div className='w-full'>
            <AppBar />
            <BlogsOnProfile
                loading={loading}
                error={error}
                blogs={blogs}
            />
        </div>
    )
}

export default Profile