const Dropdown = ({ name, id, defaultStyle, lawyerList }) => {
    return (  
        <div>
            <select name={name} id={id} className={`${defaultStyle ? 'w-full h-10 bg-white border-b border-softGray text-softGray text-sm' : ''}`} required>
                {lawyerList && (
                    <option value='' hidden>Select a lawyer</option>
                )}
                {lawyerList && lawyerList.map((item, key) => (
                    <option key={key} value={item.firstName + ' ' + item.middleName + ' ' + item.lastName}>{item.firstName + ' ' + item.middleName + ' ' + item.lastName}</option>
                ))}
            </select>
        </div>
    );
}
 
export default Dropdown;