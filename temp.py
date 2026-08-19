cd poc-b/backend
python3 -c "
import sqlite3
conn = sqlite3.connect('repositories/analysis.db')
conn.execute(\"UPDATE analysis_runs SET completed_at = CURRENT_TIMESTAMP WHERE run_id BETWEEN 13 AND 20\")
conn.commit()
conn.close()
print('done')
"
