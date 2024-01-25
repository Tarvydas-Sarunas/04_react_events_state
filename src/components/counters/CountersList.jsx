import Counter from "./Counter"


export default function CounterList() {
 return <>
 <Counter title='Push ups' init={0} up={2} upBy={15} down={1} />
 <Counter title='Pull ups' init={0} up={1} upBy={5} down={1} />
 <Counter title='Sit ups' init={0} up={3} upBy={10} down={1} />
 </>
}