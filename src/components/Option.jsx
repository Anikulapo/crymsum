const Option = ({ obj, isSelected, onSelect }) => {
    return (
        <div
            onClick={onSelect}
            className={`border flex flex-col items-center rounded-lg p-6 max-w-40 mx-auto font-inter cursor-pointer
            ${isSelected ? 'bg-green-600 border-white' : 'bg-white'}`}
        >
            <h2 className={`capitalize ${isSelected? "text-white" : " text-black"}`}>{obj.card}</h2>
            <p className={`capitalize ${isSelected? "text-white" : " text-black"}`}>{obj.number}</p>
        </div>
    );
};

export default Option;