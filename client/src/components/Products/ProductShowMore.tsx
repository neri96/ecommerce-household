import * as S from './style';

interface ShowMoreProps {
    fetchMore: () => void,
    loading: boolean
}

const ProductShowMore = ({ fetchMore, loading }: ShowMoreProps) => {
    return (
        <S.ShowMore>
            <button onClick={fetchMore}>
                {loading ? 
                    'L' : <h3>Показать еще</h3>
                }
            </button>
        </S.ShowMore> 
    )
}

export default ProductShowMore;