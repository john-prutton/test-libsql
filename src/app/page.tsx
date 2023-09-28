import { getComputers } from "@/lib/api/computers/queries"

export default async function Home() {
	const { computers } = await getComputers()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p
				className={
					computers.length > 0 ? "text-green-400" : "text-red-400"
				}
			>
				{computers.length > 0
					? `${computers[0].brand} has ${computers[0].cores} core/s`
					: "No computers in db, but everything seems to be working"}
			</p>
		</main>
	)
}
