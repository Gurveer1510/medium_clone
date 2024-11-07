import { useBlogsOfUser } from '../hooks/useBlog'
import { useParams, useNavigate } from 'react-router-dom'
import BlogsOnProfile from '../components/BlogsOnProfile'
import AppBar from '../components/AppBar'

const Profile = () => {
    const { userId } = useParams()
    const {loading, error, blogs } = useBlogsOfUser(userId!!)
    const navigate = useNavigate()

    const refresh = () => {
        navigate(0)
    }
    return (
        <div className='w-full'>
            <AppBar />
            <BlogsOnProfile
                refreshFunc = {refresh}
                loading={loading}
                error={error}
                blogs={blogs}
            />
            {/* Add Logout */}
        </div>
    )
}

export default Profile