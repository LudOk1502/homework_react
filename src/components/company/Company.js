export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div className={'company'}>
            company:
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
}