import {DownloadContainer , DownloadTitle , Group , GroupLabel , GroupInput ,DownloadButtonContainer, DownloadButton} from './downloadBoxContainer.styles';

const DownloadCard = ({setSize , size , handleDownloadFile}) =>{

    const handleChange = (e) =>{
        console.log('e.target.value',e.target.value);
        setSize(e.target.value);
    }
    return(
        <DownloadContainer>
            <DownloadTitle>انتخاب سایز</DownloadTitle>
            <Group size={size == 0 ? "true" : null} onClick={() => setSize(0)}>
                <GroupInput type="radio" id="large" name="size" value={0} onChange={e => handleChange(e)} 
                checked={size == 0}
                 />
                <GroupLabel htmlFor="large">بزرگ</GroupLabel>
            </Group>
            <Group size={size == 1 ? "true" : null} onClick={() => setSize(1)} >
                <GroupInput type="radio" id="medium" name="size" value={1} onChange={e => handleChange(e)}  
                checked={size == 1}
                 />
                <GroupLabel htmlFor="medium">متوسط</GroupLabel>
            </Group>
            <Group size={size == 2 ? "true" : null} onClick={() => setSize(2)} >
                <GroupInput type="radio" id="small" name="size" value={2} onChange={e => handleChange(e)} 
                checked={size == 2}
                 />    
                <GroupLabel htmlFor="small">کوچک</GroupLabel>
            </Group>
            <DownloadButtonContainer>
            <DownloadButton onClick={() => {handleDownloadFile(size)}}>دانلود</DownloadButton>
            </DownloadButtonContainer>
        </DownloadContainer>
    )
};

export default DownloadCard;