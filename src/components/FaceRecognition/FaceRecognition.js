import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	// console.log('box received -> ' + box);
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
				<div className='bounding-box' 
					style={{top: box.topRow , right: box.rightCol , 
                             bottom: box.bottomRow , left: box.leftcol}}>
                </div>
			</div>
		</div>
	);
}

export default FaceRecognition;