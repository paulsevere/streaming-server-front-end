export function shuffleHistory(inc) {
    return function() {
        let {
            updates
        } = this.props;
        let {
            histPos
        } = this.state;
        if (between(histPos + inc, 0, updates.length - 1)) {
            this.setState({
                editorText: updates[histPos + inc],
                histPos: histPos + inc,
                outOfBounds: false
            })
        } else {
            this.setState({
                outOfBounds: true
            })
        }
    }

}

function between(n, l, u) {
    return n >= l && n <= u
}
