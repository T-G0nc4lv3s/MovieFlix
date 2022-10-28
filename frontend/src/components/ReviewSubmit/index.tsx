import './styles.css';

const ReviewSubmit = () => {
  return (
    <div className="review-submit-card">
      <form>
        <div className="form-review-container">
          <div className="input-review-container">
            <input
              type="text"
              id="ctrl-review"
              placeholder="Deixe sua avaliação aqui"
            />
          </div>
          <div className="input-btn-container">
            <input
              type="submit"
              id="ctrl-submit"
              value="SALVAR AVALIAÇÃO"
              className="btn btn-primary btn-submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewSubmit;
