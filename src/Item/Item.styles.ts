import styled from 'styled-components'

export const Wrapper =styled.div`
display:flex;
justify-content:space-between;
height:100%;
width:100%;
flex-direction:column;
border:1px solid lightblue;
border-radius:20px;
justify-content: center;
align-items: center;
*{
	
	margin:0;
}
img{
	height:200px;
	width:100%;
	object-fit:cover;
	border-radius:20px 20px 0 0;
}
button{
	border-radius:0 0 20px 20px;
	width:100%;
	
}
div{
	font-family:Arial,Helvetica,san-serif;
	padding:0.5rem 1rem;
	height:100%;
}
`;