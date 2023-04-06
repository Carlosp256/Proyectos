package com.example.y

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.Gravity
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import java.io.BufferedReader
import java.io.InputStreamReader

class Option(val code: String, val id: String, val name: String, val url: String)

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val optionsList = readCsvData()

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = OptionsAdapter(optionsList)
    }

    private fun readCsvData(): List<Option> {
        val inputStream = assets.open("ab_5_mat.csv")
        val reader = BufferedReader(InputStreamReader(inputStream))
        val optionsList = mutableListOf<Option>()

        reader.use { r ->
            var line = r.readLine()
            while (line != null) {
                val parts = line.split(";")
                val option = Option(parts[0], parts[1], parts[2], "https://www.curriculumnacional.cl/portal/Ejes/Matematica/Medicion/${parts[1]}:")
                optionsList.add(option)
                line = r.readLine()
            }
        }

        return optionsList
    }
}

class OptionsAdapter(private val optionsList: List<Option>) :
    RecyclerView.Adapter<OptionsAdapter.OptionViewHolder>() {

    class OptionViewHolder(val textView: TextView) : RecyclerView.ViewHolder(textView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): OptionViewHolder {
        val textView = TextView(parent.context)
        textView.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        textView.setPadding(8, 8, 8, 8)
        textView.textSize = 16f
        textView.gravity = Gravity.CENTER
        textView.setBackgroundResource(R.drawable.option_background)
        try {
            // Establecer el margen inferior en 15 píxeles
            val layoutParams = textView.layoutParams as ViewGroup.MarginLayoutParams
            layoutParams.setMargins(0, 0, 0, 15)
        } catch (e: ClassCastException) {
            e.printStackTrace()
        }

        return OptionViewHolder(textView)
    }

    override fun onBindViewHolder(holder: OptionViewHolder, position: Int) {
        holder.textView.text = optionsList[position].name
        holder.textView.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse(optionsList[position].url)
            holder.itemView.context.startActivity(intent)
        }
    }

    override fun getItemCount() = optionsList.size
}
