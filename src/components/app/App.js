import React from 'react'

import TicketList from '../ticketList/ticketList'
import TicketFilter from '../ticketFilter/ticketFilter'
import TransferCount from '../transferCount/transferCount'
// import svg from '../icons/Logo.svg'
// import './app.scss'

function App() {
	return (
		<>
			<img alt='' className='iconPlane' />
			<div className='block'>
				<TransferCount />
				<div>
					<TicketFilter />
					<TicketList />
				</div>
			</div>
		</>
	)
}

export default App
