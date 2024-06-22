import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import TracksListItem from './TracksListItem'

const TracksList = () => {
	return <FlatList data={library} renderItem={() => <TracksListItem />}></FlatList>
}

export default TracksList
