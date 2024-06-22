import { Tabs } from 'expo-router'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
