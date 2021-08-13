export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div>
            company:
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>

        </div>
    );
}