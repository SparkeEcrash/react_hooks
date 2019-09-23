import {useState} from "react";

function useList(init) {
	const [list, setList] = useState(init);
	return {
		list, 
		removeItem(item){
			const filteredItems = list.filter(v => v.name !== item);
			setList(filteredItems);
		},
		saveItem(index, newVal){
			const copyList = [...list];
			copyList[index].name = newVal;
		},
		setList
	}
}

export default useList;