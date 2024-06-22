import { colors, fontSize } from '@/constants/tokens'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: 500,
				},
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={95}
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						}}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
				}}
			/>

			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
				}}
			/>

			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
